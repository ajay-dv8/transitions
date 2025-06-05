import React from "react";
import { Button } from "./ui/button";
import { Clock, Phone } from "lucide-react";

export default function Cta() {
  return (
    <div className="px-4 md:px-10 py-10">
      {/* Call to Action */}
      <div className="text-center bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Available 24/7 for Your Family
          </h3>
          <p className="text-slate-300 mb-8 text-lg leading-relaxed">
            Our compassionate team is ready to assist you at any time. We
            understand that loss doesn&apos;t follow a schedule, and we&apos;re
            here to provide immediate support and guidance when you need it
            most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-4567
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 px-8"
            >
              <Clock className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Immediate response guaranteed • Licensed professionals • Serving
            families since 1985
          </p>
        </div>
      </div>
    </div>
  );
}
