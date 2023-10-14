import React from 'react';
import Layout from '../components/Layout/layout';
import { BiMailSend, BiPhoneCall } from 'react-icons/bi';
import { TfiHeadphoneAlt } from 'react-icons/tfi'

const Contact = () => {
    return (
        <Layout title={"Contact us"}>
            <div className="row contactus">
                <div className="col-md-6">
                    <img src="/images/contactus.jpg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        If you have any Query Regarding the Product then feel free to call
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : www.help@ecommerce.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 011-6262626
                    </p>
                    <p className="mt-3">
                        <TfiHeadphoneAlt /> : 1800-0000-0000 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
