export default function filterUpcomingScreenings(movieArr) {
    return movieArr.data
      .map((elem) => {
        return {
          room: elem.attributes.room,
          date: elem.attributes.start_time,
        };
      })
      .filter((elem) => {
        if (elem.room && elem.date)
          return (elem) => elem.date > new Date().toISOString();
      });
  }