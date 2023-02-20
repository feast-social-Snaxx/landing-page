import { useRef, useState } from "react";
import { useAppDataContext } from "../../contexts/app-data-context";
import { API_URL, BASE_ROUTES } from "../../services/http-common";
import Select from "./select";
import TextInput from "./text-input";
import snaxxApiService from '../../services/snaxx-api-service';
import { useAppToastContext } from "../../contexts/app-toast-context";
import { ToastType } from "../common/toast";

const CONTACT_ENDPOINT = API_URL + BASE_ROUTES.CONTACT;

const BUDGET_EXPECTATIONS = [
    "< 5000 €",
    "5000 € - 10000 €",
    "10000 € - 20000 €",
    "20000 €- 40000 €",
    "> 40000 €"
];

const TIMELINE_EXPECTATIONS = [
    "timeline_xshort",
    "timeline_short",
    "timeline_medium",
    "timeline_long",
    "timeline_xlong",
];

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const NAME_PATTERN = /^[a-z ,.'-]+$/i;

const INPUT_MAX_LENGTH = 100;
const AREA_MAX_LENGTH = 1000;

export default function ContactForm({ isMobile = false, onFormSent, full = true, light = false }) {
    const nameRef = useRef(null);
    const companyRef = useRef(null);
    const emailRef = useRef(null);
    const detailsRef = useRef(null);
    const { t, getServices } = useAppDataContext();
    const { addToast } = useAppToastContext();
    const [nameFieldError, setNameFieldError] = useState();
    const [emailFieldError, setEmailFieldError] = useState();
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [budgetExpectation, setBudgetExpectation] = useState([]);
    const [timelineExpectation, setTimelineExpectation] = useState([]);

    const clearForm = () => {
        nameRef.current.value = "";
        emailRef.current.value = "";

        if (companyRef.current) {
            companyRef.current.value = "";
        }

        if (timelineRef.current) {
            timelineRef.current.value = "";
        }

        if (detailsRef.current) {
            detailsRef.current.value = "";
        }

        setSelectedTopics([]);
        setBudgetExpectation([]);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (validInputs()) {
            const contactInfo = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                topics: selectedTopics,
                budget: budgetExpectation,
            };

            if (companyRef.current) {
                contactInfo.company = companyRef.current.value;
            }

            if (timelineExpectation) {
                contactInfo.timeline = timelineExpectation;
            }

            if (detailsRef.current) {
                contactInfo.details = detailsRef.current.value;
            }

            snaxxApiService.contact(contactInfo).then(r => {
                if (r.status == 200) {
                    // Handle success
                    addToast(ToastType.SUCCESS, t("contact.notif.success"));

                    clearForm();

                    if (onFormSent) {
                        onFormSent();
                    }
                } else {
                    // Handle serverside error.
                    addToast(ToastType.ERROR, t("contact.notif.failed"));
                }
            }, e => {
                console.log(e);
                // Handle serverside error.
                addToast(ToastType.ERROR, t("contact.notif.failed"));
            });
        } else {
            addToast(ToastType.ERROR, t("contact.notif.field_error"));
        }
    }

    const getFirstInputs = () => {
        return (
            <>
                <TextInput
                    eltRef={nameRef}
                    id="name"
                    name="name"
                    maxLength={INPUT_MAX_LENGTH}
                    onValueChange={(val) => {
                        // Validate and set error if so
                        // setNameFieldValue(val);
                        let err = "";

                        if (!val) {
                            err = t("contact.form.required_field");
                        } else {
                            if (!NAME_PATTERN.test(val)) {
                                err = t("contact.form.invalid_name")
                            }
                        }

                        setNameFieldError(err);
                    }}
                    error={nameFieldError}
                    placeholder={t("contact.form.name")}
                    required
                    type="text"
                    light={light}
                />

                <TextInput
                    eltRef={emailRef}
                    id="email"
                    name="email"
                    maxLength={INPUT_MAX_LENGTH}
                    onValueChange={(val) => {
                        let err = "";

                        if (!val) {
                            err = t("contact.form.required_field");
                        } else {
                            if (!EMAIL_PATTERN.test(val)) {
                                err = t("contact.form.invalid_email");
                            }
                        }

                        setEmailFieldError(err);
                    }}
                    error={emailFieldError}
                    placeholder={t("contact.form.email")}
                    required
                    type="email"
                    light={light}
                />
            </>
        );
    };

    const validInputs = () => {
        return nameRef.current.value && emailRef.current.value && selectedTopics.length;
    }

    return (
        <form className={`contact-form${light ? " contact-form-light" : " contact-form-dark"}`} method="POST" action={CONTACT_ENDPOINT}>
            {
                !isMobile ?
                    <div className="contact-form-2-line">
                        {getFirstInputs()}
                    </div>
                    :
                    getFirstInputs()
            }


            {
                full ?
                    <>
                        <TextInput
                            eltRef={companyRef}
                            id="company"
                            name="company"
                            maxLength={INPUT_MAX_LENGTH}
                            placeholder={t("contact.form.company")}
                            type="text"
                            light={light}
                        />
                    </>
                    :
                    <></>
            }

            <Select
                items={getServices().map(elt => elt.name)}
                onValueChange={(val) => setSelectedTopics(val)}
                label={selectedTopics && selectedTopics.length ? selectedTopics.map((elt, i) => elt + (i != selectedTopics.length - 1 ? ", " : "")) : t("contact.form.topic")}
                required
                light={light}
                multiple
            />

            <input type="hidden" name="topics" value={selectedTopics} />

            {
                full ?
                    <>
                        <Select
                            items={BUDGET_EXPECTATIONS}
                            onValueChange={(val) => setBudgetExpectation(val)}
                            label={budgetExpectation && budgetExpectation.length ? budgetExpectation : t("contact.form.budget")}
                            light={light}
                        />

                        <input type="hidden" name="budget" value={budgetExpectation} />

                        <Select
                            items={TIMELINE_EXPECTATIONS.map(e => t(`contact.form.${e}`))}
                            onValueChange={(val) => setTimelineExpectation(val)}
                            label={timelineExpectation && timelineExpectation.length ? timelineExpectation : t("contact.form.timeline")}
                            light={light}
                        />
                    </>
                    :
                    <></>
            }

            <textarea
                ref={detailsRef}
                className={`contact-form-detail-area txt-2 text-input-${light ? "light" : "dark"}`}
                id="details"
                name="details"
                placeholder={t("contact.form.details")}
                maxLength={AREA_MAX_LENGTH}
            >
            </textarea>

            <div className="spacer-small"></div>

            <button
                type="submit"
                className="project-button txt-2 gradient-to-gradient-transition"
                onClick={(e) => onSubmit(e)}
            >
                {t("contact.form.send")}
            </button>
        </form>
    );
};
