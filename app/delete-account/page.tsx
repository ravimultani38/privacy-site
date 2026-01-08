// frontend/app/delete-account/page.tsx
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Mail } from "lucide-react";

export default function DeleteAccount() {
  const supportEmail = "support@communitytalk.app"; // Replace with your actual support email

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-50 px-4">
      <Card className="w-full max-w-md bg-slate-900 border-slate-800 shadow-xl">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Trash2 className="h-7 w-7 text-red-500" />
            <CardTitle className="text-xl font-semibold">Request Account Deletion</CardTitle>
          </div>
          <CardDescription className="text-slate-400">
            CommunityTalk allows you to permanently delete your account and associated data.
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-4 flex flex-col gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-slate-200">How to request deletion:</h3>
            <ol className="list-decimal list-inside text-sm text-slate-400 space-y-2">
              <li>Send an email to our support team using the button below.</li>
              <li>Please use the <strong>same email address</strong> associated with your account.</li>
              <li>We will verify your ownership and process the deletion within 7 days.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-slate-200">Data that will be deleted:</h3>
            <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
              <li>Your profile information and photos</li>
              <li>All messages sent by you</li>
              <li>Your community memberships</li>
              <li>Your dating preferences and matches</li>
            </ul>
          </div>

          <Button 
            className="w-full bg-red-600 hover:bg-red-700 text-white"
            onClick={() => window.location.href = `mailto:${supportEmail}?subject=Request Account Deletion`}
          >
            <Mail className="h-4 w-4 mr-2" />
            Email Support to Delete
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}