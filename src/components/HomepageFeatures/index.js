import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ใช้งานง่าย ใคร ๆ ก็เข้าใจได้',
    img: '/img/people-pp01.png',
    description: (
      <>
        ไม่ว่าคุณจะเป็นพนักงานใหม่ ตัวแทนขาย ทีมบริการ หรือแม้แต่ลูกค้า Coway Docs 
        ช่วยให้คุณเข้าใจขั้นตอนต่าง ๆ ได้ง่าย ตั้งแต่การใช้งานระบบ การสั่งซื้อสินค้า 
        ไปจนถึงการติดตั้งหรือขอรับบริการ
      </>
    ),
  },
  {
    title: 'รวมทุกข้อมูลไว้ในที่เดียว',
    img: '/img/document-pp02.png',
    description: (
      <>
        เรารวมข้อมูลสำคัญที่คุณต้องใช้ไว้ทั้งหมด ทั้งคู่มือการใช้งาน ระบบการทำงานของทีมต่าง ๆ 
        คำถามที่พบบ่อย และแนวทางการแก้ปัญหาเบื้องต้น ไม่ต้องเสียเวลาค้นหาหลายที่อีกต่อไป
      </>
    ),
  },
  {
    title: 'พร้อมช่วยเหลือคุณทุกเมื่อ',
    img: '/img/service-pp01.png',
    description: (
      <>
        Coway Docs พร้อมเป็นผู้ช่วยของคุณตลอดเวลา จะเข้าจากมือถือหรือคอมก็ได้ 
        เราพัฒนาระบบให้เข้าถึงง่ายและอัปเดตสม่ำเสมอ เพื่อให้คุณทำงานหรือใช้งาน Coway ได้อย่างมั่นใจ
      </>
    ),
  },
];

function Feature({Svg, img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={img} className={styles.featureImg} alt={title} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
