/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import DashboardHeader from './component/Header.component';
import Container from '../../container-layouts/Container.layout';
import { Text } from 'react-native';
import { typographies } from '../../assets/styles/typographies.style.asset';
import { useDispatch } from 'react-redux';
import { isGetting } from '../../redux/modules/products/products.slice.m';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(isGetting({id: 112}));
  }, []);
  return (
    <Container containerStyle={{paddingTop:15}}>
      <DashboardHeader />
      <Text style={typographies.poppinsMedium14}>This is Bangladesh</Text>
    </Container>
  );
};

export default Dashboard;
