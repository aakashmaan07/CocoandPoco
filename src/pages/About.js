import React from 'react';
import Layout from '../components/Layout/layout';
const About = () => {
    return (
        <Layout title={'About-Ecommerce App'}>
            <div className="row aboutus">
                <div className="col-md-6">
                    <img src="/images/aboutus.jpg"
                        alt="aboutus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
                    <p className="text-justify mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellat expedita, qui dicta quam aliquid facere possimus beatae rerum sint obcaecati enim nam? Corrupti temporibus impedit doloremque dolorum architecto expedita?
                        Perspiciatis molestias quaerat tempore suscipit voluptatem blanditiis dignissimos, est ipsam molestiae vel magni in! Rem consectetur.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default About;
