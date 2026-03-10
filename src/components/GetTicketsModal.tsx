import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TOUR_DATES } from "@/data/content";
import { Ticket, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GetTicketsModal({ open, onOpenChange }: Props) {
  const upcoming = TOUR_DATES.filter((d) => !d.soldOut).slice(0, 3);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-accent text-accent-foreground border-primary/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl tracking-wider text-primary">
            GET INFO/TICKETS
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-2">
          {upcoming.map((show) => (
            <a
              key={show.id}
              href={show.ticketUrl}
              className="flex items-center justify-between p-4 rounded-lg bg-accent-foreground/5 border border-accent-foreground/10 hover:border-primary/40 transition-all group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-accent-foreground/60">
                  <Calendar className="w-3.5 h-3.5" />
                  {show.date} · {show.time}
                </div>
                <p className="font-display text-lg tracking-wide text-accent-foreground">{show.venue}</p>
                <div className="flex items-center gap-1.5 text-xs text-accent-foreground/50">
                  <MapPin className="w-3 h-3" />
                  {show.city}
                </div>
              </div>
              <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md font-display text-sm tracking-wider group-hover:bg-primary/80 transition-colors flex items-center gap-1.5">
                <Ticket className="w-3.5 h-3.5" />
                INFO
              </span>
            </a>
          ))}
        </div>

        <Link
          to="/tour"
          onClick={() => onOpenChange(false)}
          className="block text-center mt-4 font-display tracking-wider text-sm text-primary hover:text-primary/80 transition-colors"
        >
          SEE ALL TOUR DATES →
        </Link>
      </DialogContent>
    </Dialog>
  );
}
