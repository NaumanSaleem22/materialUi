import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import Minimize from '@mui/icons-material/Remove';
export default function FAQS() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
      
    <div>
      <Accordion expanded={expanded==='panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={expanded==='panel1' ? <Minimize/>:<AddSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is CRYPTEN?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          CRYPTO is a utility token based on the ERC20 standard. All transactions on the
CRYPTEN platform will be carried out in CRYPTO. TheCRYPTO token will be freely
tradable on major exchanges and is fully compatible with Ethereum wallets.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={expanded==='panel2' ? <Minimize/>:<AddSharpIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What is CRYPTO Token?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded==='panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={expanded==='panel3' ? <Minimize/>:<AddSharpIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>What is the price of the CRYPTO Token?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded==='panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={expanded==='panel4' ? <Minimize/>:<AddSharpIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Why do you accept only Ether (ETH)?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}