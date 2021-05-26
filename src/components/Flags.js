//import _ from "lodash"
const verbatimPrefix = "verbatim_";
const currentPrefix = "current_";
const proposedPrefix = "proposed_";

export default {
  perfectMatchChanged: (record, rank) => {
    const text = record[`${currentPrefix}${rank}`];
    const isDifferent = record[`${proposedPrefix}${rank}`] !== text;
    return (
      text !== "null" &&
      record[`${verbatimPrefix}${rank}`] === text &&
      isDifferent
    );
  },
  changedToPerfectMatch: (record, rank) => {
    const text = record[`${currentPrefix}${rank}`];
    const isDifferent = record[`${proposedPrefix}${rank}`] !== text;
    return (
      text !== "null" &&
      record[`${verbatimPrefix}${rank}`] ===
        record[`${proposedPrefix}${rank}`] &&
      isDifferent
    );
  },
};

export const Help = {
  perfectMatchChanged: {
    text: "",
  },
};
