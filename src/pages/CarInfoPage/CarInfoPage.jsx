import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { axiosInstance } from '../../axiosInstance';

import Container from '../../components/Container/Container';
import RentForm from '../../components/RentForm/RentForm';
import Icon from '../../components/Icon/Icon';
import CarInfoList from '../../components/CarInfoList/CarInfoList';
import Loader from '../../components/Loader/Loader.jsx';

import { editMileage } from '../../utils/editMileage';
import { capitalizeText } from '../../utils/capitalizeText';

import css from './CarInfoPage.module.css';

const CarInfoPage = () => {
  const [loading, setLoading] = useState(false);

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
        setLoading(true);
        const { data } = await axiosInstance.get(`/cars/${id}`);

        setCarInfo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCarInfo();
  }, [id]);

  return (
    <>
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <div className={css.carInfoPage}>
          <Container>
            <div className={css.contentWrapper}>
              <div className={css.imageFormWrapper}>
                <div className={css.imageWrapper}>
                  <img
                    className={css.image}
                    src={img}
                    alt={`${brand} ${model}`}
                  />
                </div>
                <RentForm brand={brand} model={model} />
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
                    Mileage: {editMileage(mileage, ' ')} km
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
                      icon={
                        <Icon name={'check-circle'} width={16} height={16} />
                      }
                    />
                  </li>
                  <li>
                    <h2 className={css.listTitle}>Car Specifications:</h2>
                    <ul>
                      <li className={css.listItem}>
                        <Icon name={'calendar'} width={16} height={16} />
                        Year: {year}
                      </li>
                      <li className={css.listItem}>
                        <Icon name={'car'} width={16} height={16} />
                        Type: {capitalizeText(type)}
                      </li>
                      <li className={css.listItem}>
                        <Icon name={'fuel-pump'} width={16} height={16} />
                        Fuel Consumption: {fuelConsumption}
                      </li>
                      <li className={css.listItem}>
                        <Icon name={'gear'} width={16} height={16} />
                        Engine Size: {engineSize}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2 className={css.listTitle}>
                      Accessories and functionalities:
                    </h2>
                    <CarInfoList
                      items={accessories?.concat(functionalities)}
                      icon={
                        <Icon name={'check-circle'} width={16} height={16} />
                      }
                    />
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default CarInfoPage;
