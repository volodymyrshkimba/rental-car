import { createSelector } from '@reduxjs/toolkit';
import { selectAllFavourites } from '../filters/selectors';

export const selectAllCars = state => state.cars.carsPage.cars;
export const selectTotalPages = state => state.cars.carsPage.totalPages;
export const selectPage = state => state.cars.carsPage.page;
export const selectAllBrands = state => state.cars.brands;
export const selectLoading = state => state.cars.loading;

export const selectAllCarsWithFavourites = createSelector(
  [selectAllCars, selectAllFavourites],
  (cars, favourites) => {
    if (cars === null) return;
    return cars.reduce((acc, car) => {
      if (favourites.includes(car.id)) {
        acc.push({
          ...car,
          favourite: true,
        });
        return acc;
      }
      acc.push(car);
      return acc;
    }, []);
  }
);
