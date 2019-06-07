import styled from 'styled-components/native';
import colors from '../constants/colors';

export const Container = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 10px;
`;

export const Label = styled.Text`
  margin: 40px 0 20px 0;
  font-size: 20px;
  color: ${colors.secondary};
`;

export const Input = styled.TextInput`
  font-size: 20px;
  line-height: 28px;
  padding: 4px;
  color: ${colors.text};
  width: 100%;
  text-align: center;
`;

export default {
  Container,
  Label,
  Input
};
