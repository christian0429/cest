import * as React from 'react';
import styled from 'styled-components';

import { Button } from './Uikit';
import { Sheet } from '../..';

const Scrollable = () => {
  const [isOpen, setOpen] = React.useState(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <Button onClick={open}>Scrollable Bottom Sheet</Button>

      <Sheet isOpen={isOpen} onClose={close}>
        <SheetContent>
          {Array.from({ length: 50 })
            .fill(1)
            .map((_, i) => (
              <Box key={i}>{i}</Box>
            ))}
        </SheetContent>
      </Sheet>
    </>
  );
};

const SheetContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
  overflow: auto;
`;

const Box = styled.div`
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;

export default Scrollable;
