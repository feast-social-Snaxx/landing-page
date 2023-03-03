import { useAppDataContext } from '../contexts/app-data-context';
import MainContainer from '../components/common/main-container';
// import { useRouter } from 'next/router';
import { useRef } from 'react';
import Image from 'next/image';
import ScrollAnimation from '../components/common/scroll-animation';
import { useAppToastContext } from '../contexts/app-toast-context';
import { ToastType } from '../components/common/toast';
import snaxxApiService from '../services/snaxx-api-service';
import { TypeAnimation } from 'react-type-animation';

const TOOLS_ITEMS = [
  {
    title: "Innovative studio",
    description: "Maximize your content creation potential with our innovative tools, including advanced upload methods, customizable templates and more. Effortlessly create any media format you desire with ease.",
    background: "tool-bg1.webp"
  },
  {
    title: "AI powered",
    description: "Expand your reach with AI-powered tools to tailor your content to a global audience. Maximize your exposure through our discovery features to attract new subscribers and grow your presence on the platform.",
    background: "tool-bg2.webp"
  },
  {
    title: "Smart dashboard",
    description: "Maximize your monetization and growth with AI-powered insights. Optimize your content with tailored suggestions, driven by powerful analytics. Better understand your audience's behavior and reach your full potential.",
    background: "tool-bg3.webp"
  },
];

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Home() {
  const { t, isMobile } = useAppDataContext();
  const { addToast } = useAppToastContext();
  // const { push, locale } = useRouter();
  const firstInputRef = useRef();
  const secondInputRef = useRef();

  const register = (index) => {
    let email;

    if (index == 0) {
      email = firstInputRef.current.value;
    } else {
      email = secondInputRef.current.value;
    }

    console.log
    if (!email) {
      addToast(ToastType.ERROR, "Missing email address");
    } else {
      if (!email.match(EMAIL_REGEX)) {
        addToast(ToastType.ERROR, "Invalid email address");
      } else {
        // snaxxApiService.contact().then(r => {}, r => {});
        addToast(ToastType.SUCCESS, "Congrats! Your email has been registered");
      }
    }
  }

  return (
    <MainContainer>
      <section className='f-row jc-sb c-primary index-row-1 b-marg-l'>
        <div className='f1 padd-s-m'>
          <h1 className='fs-xl fw-b'>Unleash your culinary<br /><span className="accent-circle">creativity & get paid.</span></h1>

          <TypeAnimation
            className='fs-l fw-l' style={{ marginTop: "-.5em" }}
            sequence={[
              'For amateur chefs and pros.',
              3000,
              'For athletes.',
              3000,
              'For lifestyle creators.',
              3000
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
          />
          <div className='spacer-l'></div>
          <div>
            <div className='f-row jc-c f-wrap'>
              <input ref={firstInputRef} type="text" className='fs-xm padd-xs-s b-accent br-s c-primary f1 marg-xs' placeholder='Enter email address' />
              <button
                className='accent-hover-effect fs-xm padd-xs-s br-s b-accent marg-xs fw-b'
                onClick={() => { register(0) }}
              >
                Get early access
              </button>
            </div>
          </div>
          <p className="fs-xm txt-c"><i>“Unlock a World of Flavors”</i></p>
        </div>
        <div className='f1 f-row jc-c ai-c' style={{ minWidth: "45vw" }}>
          <Image
            alt="Demo with phone image"
            src="/demo-phone.webp"
            width={!isMobile ? "435" : "320"}
            height={!isMobile ? "609" : "448"}
          />
          <div className='f-col abs-pos bubble-bloc'>
            <div className='bubble bubble1 br-s marg-xs'>
              Cook your favorite dish
            </div>

            <div className='bubble bubble2 br-s marg-xs'>
              Share it on Snaxx
            </div>

            <div className='bubble bubble3 br-s marg-xs'>
              Get paid by your subscribers
            </div>
          </div>
        </div>
      </section>

      <section className='f-col c-primary index-row-2 b-marg-l' id="about">
        <div className='f-row jc-sa ai-c f-wrap'>
          <ScrollAnimation.ScaleIn>
            <Image
              className='sticker1'
              alt="Presentation first sticker image"
              src="/sticker1.webp"
              width={!isMobile ? "655" : "450"}
              height={!isMobile ? "640" : "440"}
            />
          </ScrollAnimation.ScaleIn>
          <div className={`txt-c padd-s-m ${!isMobile ? "lhw" : "lfw"}`}>
            <ScrollAnimation.FadeUp>
              <div className='spacer-m'></div>
              <h2 className='fs-xl fw-l'>What is <span className="title-highlight-primary br-s fs-xxl">SNAXX</span></h2>
              <p className='fs-xxm'>The ultimate food sharing platform for <b>any creators</b> to display their <b>culinary content</b> to their audience through subscriptions & exclusive custom requests.</p>
            </ScrollAnimation.FadeUp>
          </div>
        </div>

        <div className='f-row jc-c ai-c f-wrap'>
          <ScrollAnimation.ScaleIn>
            <Image
              className='arrow-img'
              alt="Accent colored arrow image"
              src="/arrow-accent.webp"
              width={!isMobile ? "347" : "280"}
              height={!isMobile ? "347" : "280"}
            />
          </ScrollAnimation.ScaleIn>
        </div>

        <div className='txt-c f-row jc-sa ai-c f-wrap' id="features">
          <div className={`f-col ${!isMobile ? "lhw" : "lfw"}`}>
            <div className="padd-s-m">
              <ScrollAnimation.FadeUp>
                <h2 className='fs-xl fw-l'>Empowering <span className="title-highlight-accent br-s">Creators</span></h2>
                <p className='fs-xxm'>Whether you're a seasoned chef, athlete, model, lifestyle creator or just enjoy cooking for fun come <b>share</b> your unique creations by offering your audience <b>exclusive subscriber-only content.</b></p>
              </ScrollAnimation.FadeUp>
            </div>
            <div className='spacer-m'></div>
            <div className='padd-s-m'>
              <ScrollAnimation.FadeUp>
                <h2 className='fs-xl fw-l'><span className="title-highlight-accent br-s">Community</span> Focus</h2>
                <p className='fs-xxm'>Connect with & <b>grow</b> your audience from <b>around the world</b> through interactive features like private messages, lives, recipe-sharing, cooking classes, & more.</p>
              </ScrollAnimation.FadeUp>
            </div>
          </div>
          <ScrollAnimation.ScaleIn>
            <Image
              className='sticker2'
              alt="Presentation second sticker image"
              src="/sticker2.webp"
              width={!isMobile ? "720" : "500"}
              height={!isMobile ? "767" : "533"}
            />
          </ScrollAnimation.ScaleIn>
        </div>
      </section>

      <section className='f-col ai-c padd-s-m' id="contact">
        <div className='blue-banner br-s fw'>
          <div className='marg-xl-m f-col ai-c txt-c'>
            <h3 className={`fs-xl fw-l c-white ${!isMobile ? "ahw" : "lfw"}`}>Become an early SNAXX Ambassador and get 90% of subscription revenues</h3>
            <p className='fs-xm c-white'>Enter your email and receive our more in depth presentation about perks and rewards</p>
            <div className={`f-row jc-c f-wrap ${!isMobile ? "hw" : "lfw"}`}>
              <input ref={secondInputRef} type="text" className='fs-xm padd-xs-s b-blue br-s c-primary f1 marg-xs' placeholder='Enter email address' />
              <button
                className='secondary-hover-effect fs-xm padd-xs-s br-s b-secondary marg-xs fw-b'
                onClick={() => { register(1) }}
              >
                Get early access
              </button>
            </div>
          </div>
        </div>
        {/* <div className='f-col jc-c ai-c c-primary b-marg-l'>
          <h2 className='fs-xl fw-l txt-c'>Leverage our tools</h2>
          <p className={`fs-xm txt-c ${!isMobile ? "hw" : "lfw"}`}>Maximize your income, optimize your content, and gain valuable data insights through free tools.</p>
        </div>
        <div className='f-row jc-c f-wrap tool-container b-marg-l'>
          {
            TOOLS_ITEMS.map((itm, i) => {
              return <ScrollAnimation.FadeIn key={`i-t-i-${i}`} className='c-primary tool-item f-col jc-c padd-s-m' style={{ backgroundImage: `url(/${itm.background})` }} animStyle={{ transition: `.75s ease-in-out ${0.25 * (i + 1)}s` }}>
                <h3 className='fs-xl fw-l tool-marg'>{itm.title}</h3>
                <p className='fs-xm tool-marg'>{itm.description}</p>
              </ScrollAnimation.FadeIn>;
            })
          }
        </div> */}
      </section>
      {/* <section className='f-row jc-c f-wrap bg-secondary'>
        <div className=''>
          <Image
            className='ambassador-img'
            alt="Ambassador section image"
            src="/ambassador-img.webp"
            width="594"
            height="384"
          />
        </div>
        <div className='f1 bg-bubbles2 f-row jc-c'>
          <div className='ambassador-bloc f-col jc-c ai-c'>
            <h2 className='fs-xl fw-l c-primary fw'>Ambassadors program</h2>
            <p className='fs-xm c-primary'>Join our Ambassadors program and be part of the Snaxx journey from the start. Take advantage of early adoption and reap the benefits and rewards along the way.</p>
          </div>
        </div>
      </section> */}
    </MainContainer>
  )
};
