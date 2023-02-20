import LazyImage from "../common/lazy-image";
import TagElement from "../common/tag-element";

export default function BlogItem({ blogImage, blogPublished, blogTitle, blogDescription, blogTags, onBlogItemClick, bgColor, width = "auto", height = "auto", isMobile }) {
    return (
        <div className="blog-item" style={{ width: width, height: height, backgroundColor: bgColor }} onClick={onBlogItemClick}>
            <div className="blog-item-tags">
                {
                    blogTags.map(elt => {
                        return (
                            <TagElement
                                key={`b-i-t-e-${elt.name}`}
                                title={elt.name}
                                txtSize={"txt-1"}
                                style={{
                                    background: "white",
                                    textAlign: "center",
                                    padding: !isMobile ? "0.5vw 1vw" : "1vw 2vw",
                                    zIndex: 2,
                                    minWidth: "10%",
                                }}
                            />
                        );
                    })
                }
            </div>

            <LazyImage imgClassName="blog-item-image" placeholder="/project-placeholder.webp" src={blogImage} alt={`${blogTitle} article cover image`} />

            <p className="blog-item-published txt-1">{blogPublished}</p>

            <p className="blog-item-title txt-4">{blogTitle}</p>

            <p className="blog-item-description txt-1">{blogDescription}</p>
        </div>
    );
};
