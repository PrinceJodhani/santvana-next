// app/components/BookingDrawer.jsx
"use client";
import React from "react";
import { Drawer, DrawerClose, DrawerContent } from "@/components/ui/drawer";
import AppointmentForm from "./AppointmentForm";

export default function BookingDrawer({ open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent className="bg-white max-w-md mx-auto rounded-t-2xl shadow-2xl">
        <div className="p-6 max-h-[85vh] overflow-y-auto">
          <DrawerClose asChild>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </DrawerClose>
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brown-100 to-teal-100 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-serif font-bold text-brown-800">Book an Appointment</h2>
            <p className="text-sm text-gray-500 mt-1">Fill in the details and we&apos;ll connect via WhatsApp</p>
          </div>
          <AppointmentForm
            member={{
              name: "Santvana - Psychological Guidance Centre",
              phone: "+919824218278",
            }}
            onClose={onClose}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
