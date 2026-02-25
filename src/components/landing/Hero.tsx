import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-16">
      {/* GRID BG */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <div className="space-y-5">
                
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-primary">
                    AI-Powered Dental Assistant
                  </span>
                </div>

                {/* HEADING (Reduced size) */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Your dental <br />
                  <span className="text-primary">questions</span> <br />
                  answered instantly
                </h1>

                {/* SUBTITLE */}
                <p className="text-base text-muted-foreground max-w-lg">
                  Chat with our AI dental assistant for instant advice, book smart appointments, and get personalized care recommendations.
                </p>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3">
                <SignUpButton mode="modal">
                  <Button size="default">
                    <MicIcon className="mr-2 size-4" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size="default" variant="outline">
                    <CalendarIcon className="mr-2 size-4" />
                    Book appointment
                  </Button>
                </SignUpButton>
              </div>

              {/* TESTIMONIAL */}
              <div className="pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full bg-muted ring-2 ring-background" />
                    ))}
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <StarIcon key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-sm font-semibold ml-1">4.9/5</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Trusted by <span className="font-medium text-foreground">1,200+ patients</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative">
              <Image
                src="/hero.png"
                alt="DentWise AI"
                width={500}
                height={500}
                className="w-full max-w-md mx-auto"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;