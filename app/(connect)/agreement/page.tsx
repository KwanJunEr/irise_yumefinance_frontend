import { Shield, Lock, FastForward, DollarSign, Building2 } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const agreementDetails = [
  {
    icon: Shield,
    title: "Secure and Safe",
    description: "YumeFinance is authorised to collect your info securely",
  },
  {
    icon: Lock,
    title: "Your Data Belongs To You",
    description: "We can only view your information, never make changes ",
  },
  {
    icon: FastForward,
    title: "Link accounts effortlessly",
    description: "Licensend and regulated service provider",
  },
];

const Agreement = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip min-h-screen w-full">
      <div className='container flex flex-col items-center justify-center my-auto mx-auto px-4 py-16 md:py-24"'>
        <div className="flex flex-col items-center justify-center">
          <div className='flex flex-col "bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20'>
            <div className="space-y-8">
              <div className="flex flex-row gap-8 items-center justify-center">
                <div className="bg-blue-500/10 p-4 rounded-full">
                  <DollarSign className="h-8 w-8 text-blue-950" />
                </div>
                <div className="bg-blue-500/10 p-4 rounded-full">
                  <Building2 className="h-8 w-8 text-blue-950" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black text-center">
                  Connect Your Accounts Securely
                </h2>
                <h3 className="text-lg md:text-xl text-black/80 mt-4">
                  YumeFinance uses Open Finance to securely link your accounts
                </h3>
              </div>
              <div className="flex flex-col gap-10">
                {agreementDetails.map((details, index) => (
                  <>
                    {" "}
                    <div className="flex flex-row gap-5">
                      <div className="rounded-full border border-white/20 bg-white/10 p-3">
                        <details.icon className="h-10 w-10 text-blue-950" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-black">
                          {details.title}
                        </h4>
                        <p className="text-sm text-black/70">
                          {details.description}
                        </p>
                      </div>
                    </div>
                  </>
                ))}

                <div className="w-full ">
                    <Link href="/choose">
                      <Button
                    className="bg-black hover:opacity-85 text-white w-full"
                    size="lg"
                  >
                    Allow Access
                  </Button>
                    </Link>
                
                </div>
                {/* Footer Note */}
                <p className="text-center text-sm text-white/60">
                  By connecting your account, you agree to our{" "}
                  <a href="#" className="underline hover:text-white">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline hover:text-white">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agreement;
