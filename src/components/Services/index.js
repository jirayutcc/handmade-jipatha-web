import React from "react";
import Icon1 from "../../images/i1.jpg";
import Icon2 from "../../images/i2.jpg";
import Icon3 from "../../images/i3.jpg";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>สินค้า</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>สมุด</ServicesH2>
          <ServicesP>
            สมุดรายรับรายจ่าย, สมุดหยอดกระปุก, สมุดเช็คสต๊อก, ตารางหยอดกระปุก ฯลฯ
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>สติ๊กเกอร์</ServicesH2>
          <ServicesP>
            สติ๊กเกอร์ชื่อ, สติ๊กเกอร์ตัวอักษร, สติ๊กเกอร์การ์ตูน, โพสอิน, เทปวาชิ ฯลฯ
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>ไหมพรม</ServicesH2>
          <ServicesP>
          ตุ๊กตาไหมพรม, กระเป๋าไหมพรม, พวงกุญแจไหมพรม หรือสามารถ Customize ได้ตามต้องการ
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
