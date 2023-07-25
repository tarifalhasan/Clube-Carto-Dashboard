import React, { useState } from 'react';

interface Variant {
  id: number;
  name: string;
}

interface VariantSectionProps {
  variants: Variant[];
}

const VariantSection: React.FC<VariantSectionProps> = ({ variants }) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Select Variant:</h2>
      <div className="grid gap-2 grid-cols-2">
        {variants.map(variant => (
          <button
            key={variant.id}
            className={`border p-2 rounded ${
              selectedVariant?.id === variant.id
                ? 'bg-blue-500 text-white'
                : 'border-gray-300'
            }`}
            onClick={() => setSelectedVariant(variant)}
          >
            {variant.name}
          </button>
        ))}
      </div>
      {selectedVariant && (
        <div className="mt-4">
          <p>Selected Variant: {selectedVariant.name}</p>
        </div>
      )}
    </div>
  );
};

export default VariantSection;
