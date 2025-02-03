import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import './homepage.css';

export default function Homepage() {
    return (
        <>
            <Header />
            <section className="posts-section">
                <Posts />
            </section>
        </>
    );
}