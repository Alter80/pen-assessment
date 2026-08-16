import {
  Award,
  Banknote,
  Calendar,
  Clock,
  GraduationCap,
  MapPin,
} from "lucide-react";
import type { CourseInfo } from "@/data/courses";

export function CourseInfoGrid({ info }: { info: CourseInfo }) {
  const tiles = [
    { label: "Start Date", value: info.startDate, Icon: Calendar },
    { label: "Duration", value: info.duration, Icon: Clock },
    { label: "Study Mode", value: info.studyMode, Icon: GraduationCap },
    { label: "Locations", value: info.locations, Icon: MapPin },
    { label: "Tuition Fee (UK)", value: info.tuitionFee, Icon: Banknote },
    { label: "Awarding Body", value: info.awardingBody, Icon: Award },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {tiles.map(({ label, value, Icon }) => (
        <div
          key={label}
          className="flex flex-col items-center rounded-card border border-border/50 bg-card px-6 py-10 text-center"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-base">
            <Icon className="h-5 w-5" />
          </span>
          <p className="mt-4 text-card-title font-semibold text-white">
            {label}
          </p>
          <p className="mt-1 text-default text-text/70">{value}</p>
        </div>
      ))}
    </div>
  );
}
