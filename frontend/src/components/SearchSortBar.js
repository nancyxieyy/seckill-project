// src/components/SearchSortBar.js
import React, { useEffect, useMemo, useState } from "react";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";

/**
 * 通用搜索与价格排序条
 * props:
 * - items: 原始数组
 * - searchKey: 搜索字段（默认 goodsName）
 * - priceKey: 价格字段（默认 goodsPrice）
 * - initialSearch / initialSort: 初始值
 * - onChange: (list, {searchTerm, sortOrder}) => void
 * - sx: MUI sx 覆写
 */
function SearchSortBar({
    items = [],
    searchKey = "goodsName",
    priceKey = "goodsPrice",
    initialSearch = "",
    initialSort = "",
    onChange,
    sx,
    }) {
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [sortOrder, setSortOrder] = useState(initialSort);

    const filteredAndSorted = useMemo(() => {
        const term = (searchTerm || "").toLowerCase();
        let list = items.filter((it) =>
        String(it?.[searchKey] ?? "").toLowerCase().includes(term)
        );
        if (sortOrder === "price_asc") {
        list = list.slice().sort((a, b) => Number(a?.[priceKey] ?? 0) - Number(b?.[priceKey] ?? 0));
        } else if (sortOrder === "price_desc") {
        list = list.slice().sort((a, b) => Number(b?.[priceKey] ?? 0) - Number(a?.[priceKey] ?? 0));
        }
        return list;
    }, [items, searchKey, priceKey, searchTerm, sortOrder]);

    useEffect(() => {
        onChange?.(filteredAndSorted, { searchTerm, sortOrder });
    }, [filteredAndSorted, searchTerm, sortOrder, onChange]);

    const labelId = "sort-by-label";

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4, ...sx }}>
        <TextField
            label="Search"
            variant="outlined"
            size="small"
            sx={{ width: 300 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel id={labelId}>Sort by</InputLabel>
            <Select
            labelId={labelId}
            value={sortOrder}
            label="Sort by"
            onChange={(e) => setSortOrder(e.target.value)}
            >
            <MenuItem value="">
                <em>默认</em>
            </MenuItem>
            <MenuItem value="price_asc">Price: Low to high</MenuItem>
            <MenuItem value="price_desc">Price: High to low</MenuItem>
            </Select>
        </FormControl>
        </Box>
    );
}

SearchSortBar.propTypes = {
    items: PropTypes.array,
    searchKey: PropTypes.string,
    priceKey: PropTypes.string,
    initialSearch: PropTypes.string,
    initialSort: PropTypes.string,
    onChange: PropTypes.func,
    sx: PropTypes.object,
};

export default SearchSortBar;