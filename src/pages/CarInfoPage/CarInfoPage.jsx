import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { axiosInstance } from '../../axiosInstance';

import Container from '../../components/Container/Container';
import RentForm from '../../components/RentForm/RentForm';

import css from './CarInfoPage.module.css';
import Icon from '../../components/Icon/Icon';
import { editMileage } from '../../utils/editMileage';
import CarInfoList from '../../components/CarInfoList/CarInfoList';
import { capitalizeText } from '../../utils/capitalizeText';

const CarInfoPage = () => {
  const { id } = useParams();
  const [
    {
      img,
      brand,
      model,
      year,
      address,
      mileage,
      rentalPrice,
      rentalConditions,
      accessories,
      functionalities,
      type,
      engineSize,
      fuelConsumption,
    },
    setCarInfo,
  ] = useState({});

  useEffect(() => {
    const fetchCarInfo = async () => {
      try {
        const { data } = await axiosInstance.get(`/cars/${id}`);
        console.log(data);

        setCarInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCarInfo();
  }, [id]);

  return (
    <div className={css.carInfoPage}>
      <Container>
        <div className={css.contentWrapper}>
          <div className={css.imageFormWrapper}>
            <div className={css.imageWrapper}>
              <img className={css.image} src={img} alt={`${brand} ${model}`} />
            </div>
            <RentForm />
          </div>
          <div className={css.textInfo}>
            <h1 className={css.title}>
              {brand} {model}, {year}{' '}
              <span className={css.id}>Id: {id.slice(0, 5)}</span>
            </h1>
            <div className={css.locationMileage}>
              <Icon name={'location'} width={12} height={15} />
              <span className={css.location}>
                {address?.split(',')[1]}, {address?.split(',')[2]}
              </span>
              <span className={css.mileage}>
                Mileage: {editMileage(mileage)} km
              </span>
            </div>
            <div className={css.price}>${rentalPrice}</div>
            <p className={css.desc}>
              The Buick Enclave is a stylish and spacious SUV known for its
              comfortable ride and luxurious features.
            </p>
            <ul className={css.carInfoGeneralList}>
              <li>
                <h2 className={css.listTitle}>Rental Conditions: </h2>
                <CarInfoList
                  items={rentalConditions}
                  icon={<Icon name={'check-circle'} width={16} height={16} />}
                />
              </li>
              <li>
                <h2 className={css.listTitle}>Car Specifications:</h2>
                <ul>
                  <li>Year: {year}</li>
                  <li>Type: {capitalizeText(type)}</li>
                  <li>Fuel Consumption: {fuelConsumption}</li>
                  <li>Engine Size: {engineSize}</li>
                </ul>
              </li>
              <li>
                <h2 className={css.listTitle}>
                  Accessories and functionalities:
                </h2>
                <CarInfoList
                  items={accessories?.concat(functionalities)}
                  icon={<Icon name={'check-circle'} width={16} height={16} />}
                />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CarInfoPage;
