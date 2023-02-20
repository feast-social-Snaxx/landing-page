import { useRouter } from "next/router";
import { useAppDataContext } from "../../contexts/app-data-context";
import ArrowedTextButton from "../common/arrowed-text-button";
import CardContainer from "../common/card-container";
import MarkerTitle from "../common/marker-title";
import VerticalGridContainer from "../common/vertical-grid-container";
import BlogItem from "./blog-item";

export default function Blogs({ title, blogs, style, isMobile, btnText, showBtn = false }) {
    const { blogTags } = useAppDataContext();
    const { push, locale } = useRouter();

    return (
        blogs && blogs.length ?
            <CardContainer style={style}>
                {
                    title && showBtn ?
                        <>
                            <div className="blogs-header">
                                <MarkerTitle title={title} />
                                <ArrowedTextButton onClick={() => {

                                }}>
                                    {btnText}
                                </ArrowedTextButton>
                            </div>
                            <div className="spacer-small"></div>
                        </>
                        :
                        title ?
                            <>
                                <MarkerTitle title={title} />
                                <div className="spacer-small"></div>
                            </>
                            :
                            <></>
                }

                <VerticalGridContainer columns={!isMobile ? 3 : 1}>
                    {
                        blogs.map(elt => {
                            return (
                                <BlogItem
                                    key={`b-i-${elt.title}`}
                                    blogImage={elt.coverImg}
                                    blogPublished={elt.published}
                                    blogTitle={elt.title}
                                    blogTags={elt.tags.map(e => blogTags.get(e))}
                                    blogDescription={elt.description}
                                    bgColor={style && style.backgroundColor ? style.backgroundColor : "white"}
                                    width="100%"
                                    isMobile={isMobile}
                                    onBlogItemClick={() => {
                                        push({
                                            pathname: '/blog/[id]',
                                            query: { id: elt.id },
                                            locale: locale
                                        })
                                    }}
                                />
                            )
                        })
                    }
                </VerticalGridContainer>
            </CardContainer>
            :
            <></>
    )
};
