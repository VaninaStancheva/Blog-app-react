import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";

export default function Homepage() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
            </div>
        </>
    );
}