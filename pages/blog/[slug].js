import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import styles from "../../styles/blog.module.css";

export default function Post({ source, frontMatter }) {
  const handleRedictTo = () => {
    window.open(frontMatter.link, "_blank");
  };
  return (
    <>
      <div className={styles.blogContainer}>
        <MDXRemote {...source} />
        <div className="butto_global_float">
          <button onClick={() => handleRedictTo()} className="shake">
            Visitar Pagina
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { source, frontMatter } = await getFileBySlug(params.slug);

  return {
    props: { source, frontMatter },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  //   console.log(posts);
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
