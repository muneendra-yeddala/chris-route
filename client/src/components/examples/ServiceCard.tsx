import ServiceCard from '../ServiceCard';
import carImage from '@assets/stock_images/luxury_black_car_tok_b4adb192.jpg';

export default function ServiceCardExample() {
  return (
    <div className="p-8">
      <ServiceCard
        image={carImage}
        title="Luxury Private Car - Tokyo"
        location="Tokyo"
        priceRange="¥25,000 - ¥45,000"
        capacity="1-4 passengers"
        duration="Full day"
        featured={true}
        verified={true}
      />
    </div>
  );
}
