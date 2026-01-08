// src/app/page.tsx

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-gray-800 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last updated: January 2026
      </p>

      <p className="mb-6">
        This Privacy Policy explains how we collect, use, and protect your information 
        when you use our chatting application.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        1. Information We Collect
      </h2>

      <h3 className="font-semibold mt-4">a. Information You Provide</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>College email address (used for authentication)</li>
        <li>Username or display name</li>
        <li>Messages sent through the app</li>
        <li>Images shared within chats</li>
        <li>Optional profile information</li>
      </ul>

      <h3 className="font-semibold mt-4">b. Automatically Collected Information</h3>
      <ul className="list-disc ml-6 mb-6">
        <li>Device information (device model, OS version)</li>
        <li>App usage data and crash reports</li>
        <li>IP address</li>
        <li>Push notification tokens</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        2. Authentication (College Email Login)
      </h2>
      <p className="mb-6">
        We use your college email address to authenticate users and restrict access
        to eligible users. Email addresses are not shared publicly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        3. Chat Messages & Image Sharing
      </h2>
      <p className="mb-6">
        Messages are used only to provide chat functionality. Images shared in the app
        are uploaded and stored using <strong>Cloudinary</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        4. Push Notifications
      </h2>
      <p className="mb-6">
        We use <strong>Firebase Cloud Messaging (FCM)</strong> to send chat notifications.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        5. Third-Party Services
      </h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Firebase (authentication, notifications, analytics)</li>
        <li>Cloudinary (image hosting)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        6. Data Security
      </h2>
      <p className="mb-6">
        We take reasonable measures to protect your data, but no system is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        7. Data Retention
      </h2>
      <p className="mb-6">
        Data is retained only as long as necessary to provide the service.
        Users may request deletion of their data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        8. Children’s Privacy
      </h2>
      <p className="mb-6">
        This app is not intended for children under the age of 13.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        9. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time.
        Updates will be posted on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        10. Contact Us
      </h2>
      <p>
        Email: <strong>debugdragons4@gmail.com</strong>
      </p>
    </main>
  );
}