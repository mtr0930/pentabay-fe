'use client'
import styled from 'styled-components';

export const FixedWidth = styled.div`
  width: 500px;
  @media (min-width: 500px) {
    width: 100%;
  }
`;