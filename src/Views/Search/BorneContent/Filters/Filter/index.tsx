import { useEffect, useState } from "react";

import Checkbox from "~/Components/Form/Checkbox";
import { useSearchContext } from "~/Contexts/searchContext";

interface FlterProps {
  filter?: string;
}

export default function Filter({ filter }: FlterProps): JSX.Element {
  const { filters, updateFilters } = useSearchContext();
  const [isSelected, setIsSeleted] = useState<boolean>(
    filters?.includes(filter)
  );

  useEffect(() => {
    setIsSeleted(filters?.includes(filter));
  }, [filters]);
  return (
    <Checkbox
      name={filter}
      forceChecked={isSelected}
      onChange={(state) =>
        updateFilters({ action: state ? "add" : "remove", filterName: filter })
      }
      label={filter}
      large
    />
  );
}
