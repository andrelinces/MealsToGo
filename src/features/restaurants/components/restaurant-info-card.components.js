import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
background-color: ${props => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
background-color: ${props => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

const Info = styled.View `
    padding: ${props => props.theme.space[2]};
`;

const Rating = styled.View `
    flex-direction: row;
    padding-top: ${props => props.theme.space[2]};
    padding-bottom: ${props => props.theme.space[2]};
`;

const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const RestaurantInfoCard = ( {restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://picsum.photos/seed/picsum/200/300"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)))
    console.log(ratingArray);
     return (
        <RestaurantCard elevation={5} >
          <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
          <Info>
           <Title> {name} </Title>
           <Section>
           <Rating>
             {ratingArray.map(() => (
             <SvgXml xml={star} width={20} height={20} />
             
             ))}
           </Rating>
            <SectionEnd>
                <SvgXml xml={open} width={20} height={20} />
            </SectionEnd>
           </Section>
           <Address> {address} </Address>
          </Info>
        </RestaurantCard>
     ); 
};