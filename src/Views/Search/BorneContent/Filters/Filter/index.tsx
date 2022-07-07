import { useState } from "react";

import { useTranslation } from "react-i18next";
import { Pressable, View } from "react-native";

import Checkbox from "~/Components/Form/Checkbox";
import { useSearchContext } from "~/Contexts/searchContext";

interface FilterProps {
  filter?: string;
}

export default function Filter({ filter }: FilterProps): JSX.Element {
  const { t } = useTranslation();
  const { filters, updateFilters } = useSearchContext();
  const [isSelected, setIsSeleted] = useState<boolean>(
    filters?.includes(filter)
  );

  return (
    <Pressable
      onPress={() => {
        setIsSeleted((prev) => !prev);
        updateFilters({
          action: !isSelected ? "add" : "remove",
          filtersName: [filter]
        });
      }}
    >
      <View pointerEvents="none">
        <Checkbox
          name={filter}
          forceChecked={isSelected}
          label={t(`search.services.${filter}`)}
          large
          controlled
        />
      </View>
    </Pressable>
  );
}
