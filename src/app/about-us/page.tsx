import Image from "next/image";
import basit from "@/public/basit.jpg";


export default function About() {
    return (
        <div className="container">
            <div className="content">
                <div className="text">
                    <h1 className="heading">About Me</h1>
                    <p>
                        Hello! I'm a passionate frontend developer with a strong
                        interest in creating user-friendly and visually appealing websites. 
                        My journey in web development began with a curiosity for design and coding, 
                        which has now grown into a fulfilling career.
                    </p>
                    <p>
                        In my spare time, I enjoy exploring new technologies, traveling, 
                        and capturing moments with my camera. I believe in the power of continuous learning 
                        and strive to stay updated with the latest trends in web development.
                    </p>
                </div>
                <Image
                    src={basit}
                    alt="Profile Picture"
                    width={150}
                    height={150}
                    className="image"
                />
            </div>
        </div>
    );
}
