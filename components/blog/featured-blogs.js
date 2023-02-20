import MarkerTitle from "../common/marker-title";
import ArrowedTextButton from "../common/arrowed-text-button";
import VerticalGridContainer from "../common/vertical-grid-container";
import { useRouter } from "next/router";
import BlogItem from "./blog-item";
import { useAppDataContext } from "../../contexts/app-data-context";

export default function FeaturedBlogs({ title, btnTitle, featured, isMobile }) {
    const { blogTags } = useAppDataContext();
    const { push, locale } = useRouter();

    return (
        featured && featured.length ?
            <div className="featured-blogs">
                <div className="featured-blogs-header">
                    <MarkerTitle title={title} />
                    <ArrowedTextButton onClick={() => {
                        push({
                            pathname: '/blog',
                            locale: locale
                        })
                    }}>
                        {btnTitle}
                    </ArrowedTextButton>
                </div>

                <div className="spacer-small"></div>

                <VerticalGridContainer columns={isMobile || featured.length == 1 ? 1 : 2}>
                    {
                        featured.map(elt => {
                            return (
                                <BlogItem
                                    key={`f-b-${elt.name}`}
                                    blogImage={elt.coverImg}
                                    blogPublished={elt.published}
                                    blogTitle={elt.title}
                                    blogTags={elt.tags.map(e => blogTags.get(e))}
                                    blogDescription={elt.description}
                                    bgColor="transparent"
                                    width="100%"
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
            </div>
            :
            <></>
    );
};
