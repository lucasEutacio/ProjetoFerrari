import {
  endOfDay,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  format,
} from "date-fns";
import { ptBR } from "date-fns/locale";

document.querySelectorAll(".calendar").forEach((calendar) => {
  const today = new Date();
  const startMonth = startOfMonth(today);

  const startAt = startOfWeek(startMonth);
  const endAt = endOfWeek(endOfDay(today));

  const title = calendar.querySelector("h2");
  const day = calendar.querySelector(".days");
  const btnToday = calendar.querySelector(".btn-today");
  const btnPrev = calendar.querySelector(".btn-prev");
  const btnNext = calendar.querySelector(".btn-next");

  btnToday.addEventListener("click", (e) => {});

  btnPrev.addEventListener("click", (e) => {});

  btnNext.addEventListener("click", (e) => {});

  const render = () => {
    title.innerHTML = format(startMonth, "MMMM yyyy", {
      locale: ptBR,
    });
  };

  console.log({
    today,
    startMonth,
    startAt,
    endAt,
  });

  render();
});
