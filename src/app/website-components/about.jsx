import Link from "next/link"
export default function About() {
    return (
        <>
            <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    I'm a student at the University of Engineering and Management (UEM) in Kolkata, India. In 
                    addition to my studies i also enjoy building projects and contributing to open source.
                    I'm always excited to explore new opportunities to apply my skills and gain
                    real-world experience through projects, internships, or collaborations.
                    <br />
                    This portfolio showcases my early projects, skills, and aspirations as I work towards building a 
                    successful career in Computer Science. Feel free to browse my work and get in touch!
                </p>
                </div>
            </section>
        </>
    )

}