/**
 * Filtron eventet bazuar në fushën dhe interesat e përdoruesit
 * @param {Array} events - lista e të gjitha eventeve
 * @param {String} field - fusha e përdoruesit (psh. "Computer Science")
 * @param {Array} interests - interesat e përdoruesit (psh. ["AI", "Web Development"])
 * @returns {Array} lista e eventeve që përputhen
 */
function matchPreferences(events, field, interests) {
  return events.filter(event =>
    event.field === field &&
    event.tags.some(tag => interests.includes(tag))
  );
}

module.exports = matchPreferences;
