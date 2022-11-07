import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;

  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: calc((100% - ${p => p.theme.space[4]}px*7) / 8);
  gap: ${p => p.theme.space[4]}px;

  padding: ${p => p.theme.space[4]}px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 20px;
  box-shadow: 5px 5px 10px -5px rgba(64, 64, 64, 0.75);
`;

export const Img = styled.img`
  width: 130px;
  height: 150px;
  object-fit: cover;

  border-radius: 5px;
`;
