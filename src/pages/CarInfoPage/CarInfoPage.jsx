import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { axiosInstance } from '../../axiosInstance';

import Container from '../../components/Container/Container';
import RentForm from '../../components/RentForm/RentForm';

import css from './CarInfoPage.module.css';

const CarInfoPage = () => {
  const { id } = useParams();
  const [{ img, brand, model }, setCarInfo] = useState({});

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
          <div className={css.imageForm}>
            <div className={css.imageWrapper}>
              <img className={css.image} src={img} alt={`${brand} ${model}`} />
            </div>
            <RentForm />
          </div>
          <div className={css.textInfo}></div>
        </div>
      </Container>
    </div>
  );
};

export default CarInfoPage;
