import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LazyImage from "../common/lazy-image";
import MainContainer from "../common/main-container";
import ParenthesisSubtitle from "../common/parenthesis-subtitle";
import { ToastType } from "../common/toast";
import { useAppDataContext } from "../../contexts/app-data-context";
import { useAppToastContext } from "../../contexts/app-toast-context";
import snaxxApiService from "../../services/snaxx-api-service";
import LinkedInLogo from "../../public/linkedin.svg";
import FacebookLogo from "../../public/facebook.svg";
import TwitterLogo from "../../public/twitter.svg";
import CardContainer from "../common/card-container";
import { formatBlogSection } from "../../utils/content-formatter-utils";
import FeaturedBlogs from "./featured-blogs";

export default function BlogPreview({ id, item }) {
    const [blog, setBlog] = useState();
    // Filter elements depending on the datamodel
    const { t, isMobile, getRandomBlogs } = useAppDataContext();
    const { locale } = useRouter();
    const { addToast } = useAppToastContext();

    useEffect(() => {
        if (item) {
            setBlog(item);
        } else if (id) {
            snaxxApiService.getBlogItem(id, locale).then(r => {
                setBlog(r.data.data);
            }, e => {
                addToast(ToastType.ERROR, "Error from API fetching article");
            });
        }
    }, [id]);

    return (
        blog ?
            <MainContainer style={{ background: "white", width: "100%" }}>
                <div className="spacer-small"></div>

                <CardContainer>
                    <div className="blog-detail-container">
                        <div className="blog-detail-tags">
                            <ParenthesisSubtitle title={t("blog.detail.tags")} style={{ color: "rgb(167, 167, 167)" }} />

                            <p className="blog-detail-tags-value txt-2">
                                {blog.tags.map(elt => elt.name).join(", ")}
                            </p>

                        </div>

                        <div className="blog-detail-divider"></div>

                        <div className="blog-detail-body">
                            <p className="blog-detail-published txt-2">
                                {blog.published}
                            </p>

                            <h1 className="blog-detail-title txt-8">
                                {blog.title}
                            </h1>

                            <LazyImage imgClassName="blog-detail-cover-image" placeholder="/project-placeholder.webp" src={blog.coverImg} alt={`${blog.title}${t("blog.detail.cover_alt")}`} />

                            <div className="spacer-medium"></div>

                            <p className="blog-detail-description txt-2">
                                {blog.description}
                            </p>

                            <div className="spacer-medium"></div>

                            {
                                formatBlogSection(blog.section)
                            }
                        </div>

                        <div className="blog-detail-divider blog-detail-divider-right"></div>

                        <div className="blog-detail-share">
                            <ParenthesisSubtitle title={t("blog.detail.share")} style={{ color: "rgb(167, 167, 167)" }} />

                            <div className="blog-detail-share-controls">
                                <Link href={SOCIAL_SHARE_URLS.LINKEDIN + window.location.href} target='_blank'>
                                    <>
                                        <LinkedInLogo className="blog-detail-share-logo light-grey-to-gradient-transition-with-text" />
                                    </>
                                </Link>
                                <Link href={SOCIAL_SHARE_URLS.FACEBOOK + window.location.href} target='_blank'>
                                    <>
                                        <FacebookLogo className="blog-detail-share-logo light-grey-to-gradient-transition-with-text" />
                                    </>
                                </Link>
                                <Link href={SOCIAL_SHARE_URLS.TWITTER + window.location.href} target='_blank'>
                                    <>
                                        <TwitterLogo className="blog-detail-share-logo light-grey-to-gradient-transition-with-text" />
                                    </>
                                </Link>

                            </div>

                        </div>
                    </div>
                </CardContainer>

                <div className="spacer-large"></div>

                <CardContainer style={{ backgroundColor: "rgb(233, 233, 233)", marginTop: "-3.5vw", width: "100%", zIndex: 1 }}>
                    <div className="spacer-medium"></div>
                    <FeaturedBlogs title={t("blog.detail.more_like_this")} btnTitle={t("common.view_more")} featured={getRandomBlogs(blog.tags, 3)} isMobile={isMobile} />
                    <div className="spacer-large"></div>
                </CardContainer>
            </MainContainer>
            :
            <></>
    );
}
