import Select from "react-select";
import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  label: country.name.common,
  value: country.name.common,
  flag: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`,
}));

const CountrySelect = ({ value, onChange, name, error, isReadOnly }) => {
  const selected =
    typeof value === "string"
      ? formattedCountries.find((c) => c.value === value)
      : value;

  const handleChange = (selectedOption) => {
    onChange(selectedOption ? selectedOption.value : "");
  };

  return (
    <div>
      <Select
        name={name}
        value={selected}
        options={formattedCountries}
        onChange={handleChange}
        isSearchable
        isDisabled={isReadOnly} // Disable if read-only
        formatOptionLabel={(option) => (
          <div className="flex items-center gap-2">
            <img
              src={option.flag}
              alt={option.label}
              className="w-5 h-4 object-cover rounded-sm"
            />
            <span>{option.label}</span>
          </div>
        )}
        styles={{
          control: (base) => ({
            ...base,
            padding: "6px",
            borderRadius: "8px",
          }),
        }}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default CountrySelect;
