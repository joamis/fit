
export const server = 'http://localhost:3000';
export const mealUrl = server + '/meals';
export const mealHistoryUrl = server + '/mealsHistory';
export const userUrl = server + '/users/user';
export const registrationUrl = server + '/users/addUser';
export const imageUrl = server + '/image'

export function getDeleteMealHistoryUrl(id: string): string {
  return mealHistoryUrl + '/' + id;
}

export function  getUrlWithToken(url: string, token: string) {
  const tokenFormatted = token.length ? '?token=' + token : '';
  return `${url}${tokenFormatted}`;
}

export function getPostMealsHistoryUrl(name: string, token: string) {
  const tokenFormatted = token.length ? '?token=' + token : '';
  return `${mealHistoryUrl}/${name}${tokenFormatted}`;
}

