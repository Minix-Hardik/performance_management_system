export const RatingInput = ({
    rating,
    onChange,
    disabled,
}: {
    rating?: number;
    onChange: (value: number) => void;
    disabled: boolean;
}) => (
    <div className="ef-flex ef-items-center ef-gap-2">
        <input
            type="number"
            min={0}
            max={10}
            step={0.5}
            value={rating ?? ""}
            onChange={(e) => {
                let value = parseFloat(e.target.value);
                if (isNaN(value)) {
                    onChange(0);
                    return;
                }
                if (value < 0) value = 0;
                if (value > 10) value = 10;
                onChange(value);
            }}
            disabled={disabled}
            className={`ef-w-16 ef-px-2 ef-py-1 ef-border ef-rounded ef-text-center ef-font-semibold ef-text-sm ${disabled ? "ef-bg-gray-100 ef-text-gray-500 ef-cursor-not-allowed" : "ef-bg-white"
                }`}
            placeholder="0-10"
        />
        <span className="ef-text-xs ef-text-gray-600">/ 10</span>
    </div>
);
