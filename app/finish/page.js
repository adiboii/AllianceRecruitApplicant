'use client';
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";

const Finished = () => {
    return (
        <div className="h-fit">
            <Navbar showAboutButton={false}/>
            <Container>
                <div className="max-w-3xl mx-auto flex flex-col items-start">
                    <h1 class="text-3xl font-bold text-center mb-6">🎊Thanks for Applying! Here's What Happens Next.</h1>
                    <p class="text-lg text-gray-700 mb-6 text-justify">Our team has received your information and will be reviewing your qualifications shortly. We'll keep you updated on the status of your application, and you can expect to hear back from us within 1 to 2 weeks. In the meantime, <span className="text-primary">please check your email for a confirmation message</span>  from us to let you know we've received your application.</p>
                    <p class="text-lg text-gray-700 mb-6 text-justify">While waiting for our response, take a moment to visit our <span className="text-primary font-semibold">website</span> and discover how we are transforming organizations and communities through our innovative IT solutions and services. If you have any inquiries about your application or the recruitment process, don't hesitate to reach out to us at <span className="text-primary">jobs@alliance.com.ph.</span></p>
                    <p class="text-lg text-gray-700 mb-6 text-justify">Thank you for considering Alliance as a potential employer. We look forward to the possibility of working with you in the future!</p>
                </div>
                <div class="flex max-w-3xl mx-auto mt-6 justify-end">
                    <Link href="/">
                        <button className="px-24 py-4 bg-primary hover:bg-red-700 text-white rounded-md">Finish</button>
                    </Link>
                </div>
            </Container>
        </div>
    );
}

  export default Finished;