export const RatingInput = ({
    rating,
    onChange,
    disabled,
}: {
    rating?: number;
    onChange: (value: number) => void;
    disabled: boolean;
}) => (
    <div className="ef-space-y-2">
        <div className="ef-flex ef-items-center ef-gap-3">
            <input
                type="number"
                min={0}
                max={10}
                step={0.5}
                value={rating ?? ""}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                disabled={disabled}
                className="ef-w-20 ef-px-3 ef-py-2 ef-border ef-rounded-lg ef-text-center ef-font-semibold ef-text-lg"
                placeholder="0-10"
            />
            <span className="ef-text-gray-600">/ 10</span>
        </div>
    </div>
);
