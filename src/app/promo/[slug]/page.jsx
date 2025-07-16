"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PromoDetail() {
  const { slug } = useParams();
  const [promoDetail, setPromoDetail] = useState(null);

  useEffect(() => {
    // level 1: CSR
    console.log(`render client promo detail with id slug: ${slug}`);
    async function fetchDetailUser(slug) {
      const response = await fetch(`http://localhost:8080/promos/${slug}`);
      const data = await response.json();
      setPromoDetail(data);
    }
    fetchDetailUser(slug);
  }, []);

  if (!promoDetail) return <div className="container mx-auto">Loading...</div>;

  return (
    <div className="container mx-auto font-mono text-4xl">
      <h3 className="font-bold mb-5">
        Promo Detail with slug: {promoDetail.id} (CSR Implementation)
      </h3>
      <p>
        <strong>Title</strong>: "{promoDetail.title}"
      </p>
      <p>
        <strong>Views</strong>: {promoDetail.description}
      </p>
    </div>
  );
}
