import { useEffect, useState } from "react";
import { apiGet } from "../api";

export const EventNotification = () => {
  const [latestEventId, setLatestEventId] = useState(null);

  useEffect(() => {
    const checkForNewEvent = async () => {
      try {
        const res = await apiGet("/events/latest");
        if (!res.ok) {
          console.error("Failed to fetch events:", res.status);
          return;
        }
        const data = await res.json();
        console.log("Latest event data:", data);
        if (!latestEventId || data._id !== latestEventId) {
          setLatestEventId(data._id);
          if (Notification.permission === "granted") {
            new Notification("New Event!", {
              body: data?.title ? `Check out: ${data.title}` : "A new event is available!",
            });
          }
        }
      } catch (err) {
        console.error("Error fetching latest event:", err);
      }
    };
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
    const interval = setInterval(checkForNewEvent, 10000);
    return () => clearInterval(interval);
  }, [latestEventId]);
  return null;
};
