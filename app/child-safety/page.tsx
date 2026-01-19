import React from 'react';
import Head from 'next/head';

export default function ChildSafety() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Child Safety Standards | Community Talk</title>
        <meta name="description" content="Community Talk's Child Safety Standards and CSAM policies." />
      </Head>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Child Safety Standards</h1>
        </div>

        <div className="p-6 space-y-6 text-gray-700">
          <section>
            <p className="mb-4">
              At <strong>Campustry</strong>, we are deeply committed to maintaining a safe environment for all users, specifically minors. We have a zero-tolerance policy regarding Child Sexual Abuse Material (CSAM) and the exploitation of children.
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Zero Tolerance Policy</h2>
            <p>
              We strictly prohibit the upload, sharing, distribution, or solicitation of content that depicts child sexual abuse or exploitation. This includes, but is not limited to, any visual or textual representation of sexual acts involving minors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Monitoring and Enforcement</h2>
            <p className="mb-2">
              To ensure the safety of our platform, we employ the following measures:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>User Reporting:</strong> We provide accessible tools within the app for users to report suspicious behavior or content immediately.</li>
              <li><strong>Content Review:</strong> Reported content is reviewed promptly by our safety team.</li>
              <li><strong>Immediate Action:</strong> Any user found violating these policies will be permanently banned from the platform immediately.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Reporting to Authorities</h2>
            <p>
              If we identify CSAM or evidence of child exploitation on our platform, we will:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Preserve the evidence as required by law.</li>
              <li>Report the content and the user's details to the <strong>National Center for Missing & Exploited Children (NCMEC)</strong> (CyberTipline).</li>
              <li>Cooperate fully with relevant law enforcement agencies in their investigations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Contact Us</h2>
            <p>
              If you have concerns regarding child safety on our platform, or need to report an issue directly, please contact our safety officer:
            </p>
            <div className="mt-3 p-4 bg-gray-100 rounded-md">
              <p><strong>Email:</strong> debugdragons4@gmail.com</p>
              {/* Add your physical address if you have one, otherwise it's optional */}
            </div>
          </section>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Community Talk. All rights reserved.
            </p>
        </div>
      </div>
    </div>
  );
}