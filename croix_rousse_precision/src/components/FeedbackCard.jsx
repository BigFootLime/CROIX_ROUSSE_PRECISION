import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarIcon } from "lucide-react";
import { Link } from "@react-email/components";
import { PhoneCallIcon } from "lucide-react";
import { MailIcon } from "lucide-react";
import { CustomDialog } from ".";

const EmailNizier = () => {
  return (
    <Link
      className="text-[14px]"
      href={`mailto:nizier@croix-rousse-precision.fr`}
    >
      nizier@croix-rousse-precision.fr
    </Link>
  );
};
const EmailLambert = () => {
  return (
    <Link
      className="text-[14px]"
      href={`mailto:lambert@croix-rousse-precision.fr`}
    >
      lambert@croix-rousse-precision.fr
    </Link>
  );
};

const FeedbackCard = ({ name, firstname, title, tel, telNo, img }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <CustomDialog
          button={
            <div className="flex flex-col sm:flex-row justify-start items-center px-6 py-8 rounded-[20px] max-w-[500px] bg-[#123456] my-5 feedback-card">
              <Avatar className="w-60 h-60 sm:mr-4 mb-4 sm:mb-0">
                <AvatarImage src={img} alt={name} />
              </Avatar>
              <div className="flex flex-col justify-center flex-grow">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                  {name}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                  {title}
                </p>
              </div>
            </div>
          }
          title={name}
          description={
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@{firstname}</h4>
                <div className="flex items-center pt-2">
                  <PhoneCallIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <h4>
                    <a href={"tel:" + tel}>{telNo}</a>
                  </h4>
                </div>
                <div className="flex items-center pt-2">
                  <MailIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  {name === "Lambert THOMASSONI" ? (
                    <EmailLambert />
                  ) : (
                    <EmailNizier />
                  )}
                </div>
                <div className="flex items-center pt-2">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  {name === "Lambert THOMASSONI" ? (
                    <span className="text-xs text-muted-foreground">
                      Directeur depuis Janvier 1991
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Directeur Production depuis Janvier 1991
                    </span>
                  )}
                </div>
              </div>
            </div>
          }
        />
      ) : (
        <HoverCard>
          <HoverCardTrigger>
            <div className="flex flex-col sm:flex-row justify-start items-center px-6 py-8 rounded-[20px] max-w-[500px] bg-[#123456] my-5 feedback-card">
              <Avatar className="w-60 h-60 sm:mr-4 mb-4 sm:mb-0">
                <AvatarImage src={img} alt={name} />
              </Avatar>
              <div className="flex flex-col justify-center flex-grow">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                  {name}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                  {title}
                </p>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 font-poppins">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@{firstname}</h4>
                <div className="flex items-center pt-2">
                  <PhoneCallIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <h4>
                    <a href={"tel:" + tel}>{telNo}</a>
                  </h4>
                </div>
                <div className="flex items-center pt-2">
                  <MailIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  {name === "Lambert THOMASSONI" ? (
                    <EmailLambert />
                  ) : (
                    <EmailNizier />
                  )}
                </div>
                <div className="flex items-center pt-2">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  {name === "Lambert THOMASSONI" ? (
                    <span className="text-xs text-muted-foreground">
                      Directeur depuis Janvier 1991
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Directeur Production depuis Janvier 1991
                    </span>
                  )}
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      )}
    </div>
  );
};

export default FeedbackCard;
