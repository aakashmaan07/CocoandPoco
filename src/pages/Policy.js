import React from 'react';
import Layout from '../components/Layout/layout';

const Policy = () => {
    return (
        <Layout title={'Policy'}>
            <div className="row privacypolicy">
                <div className="col-md-6">
                    <img src="/images/privacypolicy.jpg"
                        alt="privacypolicy"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
                    <p className="justify mt-2">Policy</p>
                    <p className="justify mt-2">Policy</p>
                    <p className="justify mt-2">Policy</p>
                    <p className="justify mt-2">Policy</p>
                    <p className="justify mt-2">Policy</p>
                    <p className="justify mt-2">Policy</p>
                </div>
            </div>
        </Layout>
    );
}

export default Policy;
