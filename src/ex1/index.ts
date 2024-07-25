/*
[2 points] 
Dans le fichier src/ex1/index.ts, 
écrire l’implémentation de la fonction isRangeAvailable, 
qui prend en argument une plage de dates demandées
(avec une date de début et une date de fin) 
et une plage de dates disponibles, et retourne true
si la plage demandée est incluse dans la plage de dates disponibles, false sinon.
*/

export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export function isRangeAvailable(
  requestedRange: DateRange,
  availableRange: DateRange
): boolean {
  const { startDate: selectedStartDate, endDate: selectedEndDate } =
    requestedRange;
  const { startDate: availableStartDate, endDate: availableEndDate } =
    availableRange;

  return (
    selectedStartDate >= availableStartDate &&
    selectedEndDate <= availableEndDate
  );
}
